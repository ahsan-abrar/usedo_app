import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
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

  // handle pull to refresh
  const handlePullRefresh = () => {
    setIsLoading(true);
    handleGetList();
  };

  // handle bottom Infinite Scroll
  const handleInfiniteScroll = () => {
    alert('SD');
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      {isLoading && <ActivityIndicator color="#000" size="large" />}

      {!isLoading && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={handlePullRefresh}
            />
          }
          keyExtractor={(item, index) => `${item.title}_list_${index}`}
          data={listData}
          renderItem={({item, index}) => {
            return <ListItem data={item} />;
          }}
          onEndReached={handleInfiniteScroll}
        />
      )}
    </View>
  );
}
