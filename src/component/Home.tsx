import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import tw from 'twrnc';
import Categories from '../../src/component/Categories';
import renderDetail from '../../src/component/RenderDetails';
import SearchBar from '../..//src/component/SearchBar';
import {formatWithDate} from '../../src/utils/formatwithDate';
import useAppointment from '../hooks/useAppointment';
import {Loading} from '../loader';

const Home = () => {
  const {data: dat, loading} = useAppointment();
  const [search, setSearch] = useState('');
  const [clickedItem, setClickedItem] = useState('');
  const [value, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');
  useEffect(() => {
    const filteredItems = () => {
      const val = dat?.appoint?.filter(item => {
        return Object.values(item.doctor.firstName)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setData(val);
    };
    filteredItems();
  }, [dat?.appoint, search]);
  return (
    <SafeAreaView style={tw`bg-[#eeee] flex-1`}>
      <View style={tw`bg-white p-4`}>
        <SearchBar search={search} setSearch={setSearch} />
      </View>
      <Categories
        setClickedItem={setClickedItem}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={tw` justify-center items-center`}>
            <Loading />
          </View>
        ) : selectedTab === 'All' ? (
          <Timeline
            data={formatWithDate(value) || []}
            showTime={false}
            lineColor="#8C8CA180"
            circleColor={String(tw.style('bg-[#E31B23]').backgroundColor)}
            circleSize={8}
            renderDetail={(...props) => renderDetail(...props)}
            renderFullLine
            detailContainerStyle={tw.style({
              marginBottom: 16,
            })}
            eventDetailStyle={tw.style({
              paddingTop: 20,
              paddingBottom: 0,
            })}
            // style={tw.style({marginLeft: -PADDING + 10})}
            isUsingFlatlist={false}
          />
        ) : (
          <Timeline
            data={formatWithDate(clickedItem) || []}
            showTime={false}
            lineColor="#8C8CA180"
            circleColor={String(tw.style('bg-[#E31B23]').backgroundColor)}
            circleSize={8}
            renderDetail={(...props) => renderDetail(...props)}
            renderFullLine
            detailContainerStyle={tw.style({
              marginBottom: 16,
            })}
            eventDetailStyle={tw.style({
              paddingTop: 20,
              paddingBottom: 0,
            })}
            // style={tw.style({marginLeft: -PADDING + 10})}
            isUsingFlatlist={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
