import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {ActivityIndicator, FlatList, View, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getDataRequest} from '../../actions/GeneralActions';
import ListItem from '../../components/listItem';
import styles from './styles';

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const listData = useSelector(state => state.general.list);

  // states
  const [isLoading, setIsLoading] = useState(true);
  const [isbottomLoading, setIsbottomLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    handleGetList();
  }, []);

  // get data
  const handleGetList = () => {
    const payload = {
      skip: skip,
      limit: limit,
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
    let tempLimit = limit + 8;

    const payload = {
      skip: tempSkip,
      limit: tempLimit,
    };
    dispatch(
      getDataRequest(payload, data => {
        setIsbottomLoading(false);

        if (!_.isEmpty(data?.data)) {
          setLimit(tempLimit + 8);
          setSkip(tempSkip + 8);
        }
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />
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
