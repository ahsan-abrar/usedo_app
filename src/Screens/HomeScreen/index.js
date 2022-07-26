import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Routes from '../../navigation/Routes';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {getDataRequest} from '../../actions/GeneralActions';
import ListItem from '../../components/listItem';

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const listData = useSelector(state => state.general.list);

  // states
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetList();
  }, []);

  // get data
  const handleGetList = () => {
    dispatch(
      getDataRequest({}, () => {
        setIsLoading(false);
      }),
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}

      {!isLoading && (
        <FlatList
          keyExtractor={(item, index) => `${item.title}_list_${index}`}
          data={listData}
          renderItem={({item, index}) => {
            return <ListItem data={item} />;
          }}
          onEndReached={() => {
            alert('Sd');
          }}
          ListEmptyComponent={<Text>No data found</Text>}
        />
      )}
    </View>
  );
}
