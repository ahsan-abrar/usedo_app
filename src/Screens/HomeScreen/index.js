import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {
  ActivityIndicator,
  FlatList,
  View,
  RefreshControl,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getDataRequest, loadMoreRequest} from '../../actions/GeneralActions';
import ListItem from '../../components/listItem';
import styles from './styles';

const ITEM_LIMIT = 8;
const ITEM_SKIP = 0;

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const listData = useSelector(state => state.general.list);

  // states
  const [isLoading, setIsLoading] = useState(true);
  const [isbottomLoading, setIsbottomLoading] = useState(true);
  const [skip, setSkip] = useState(ITEM_SKIP);

  useEffect(() => {
    handleGetList();
  }, []);

  // get data
  const handleGetList = () => {
    setSkip(ITEM_SKIP);

    const payload = {
      skip: ITEM_SKIP,
      limit: ITEM_LIMIT,
    };
    dispatch(
      getDataRequest(payload, () => {
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
    setIsbottomLoading(true);

    let tempSkip = skip + 8;

    const payload = {
      skip: tempSkip,
      limit: ITEM_LIMIT,
    };
    dispatch(
      loadMoreRequest(payload, data => {
        setIsbottomLoading(false);

        if (!_.isEmpty(data?.data)) {
          setSkip(tempSkip);
        }
      }),
    );
  };
  const calculatePageNo = skip / ITEM_LIMIT + 1;

  return (
    <View style={styles.container}>
      <View style={styles.space} />

      <Text style={{color: 'red'}}>Page:{calculatePageNo}</Text>
      {isLoading && <ActivityIndicator color="#000" size="large" />}

      {!isLoading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
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
          onEndReachedThreshold={0.05}
          ListFooterComponent={
            isbottomLoading && <ActivityIndicator color="#000" size="large" />
          }
        />
      )}
    </View>
  );
}
