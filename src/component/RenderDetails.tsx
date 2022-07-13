import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
// import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';
// import DotIcon from '../svg/DotIcon';
import dayjs from 'dayjs';
import DotIcon from '../svg/DotIcon';
// import {format} from 'date-fns';
dayjs.extend(relativeTime);
const renderDetail = (data, id, _) => {
  console.log(data?.data.map(r => r.doctor));
  return (
    <View>
      <Text style={tw`font-bold text-[#8C8CA2] mb-4`}>
        {dayjs(data?.date).format('DD/MM/YYYY')}
      </Text>
      {data.data?.map((rowData, idx) => (
        <Animatable.View
          animation="fadeIn"
          delay={(id + idx) * 500}
          style={tw.style(
            'rounded-lg bg-[#ECF1F4] px-4 py-2',
            idx !== data.data?.length - 1 && 'mb-4',
          )}
          key={rowData.id}>
          <View style={tw`bg-[#8C8CA2] p-2 rounded-lg`}>
            <Text style={tw`font-bold capitalize`}>{rowData.reason}</Text>
            <View style={tw`flex-row items-center my-[7.5px]`}>
              <Text>Dr {rowData.doctor.firstName}</Text>
              <DotIcon style={tw`mx-[10px]`} />
              <Text>{dayjs(rowData.date).format('h:mmA')}</Text>
            </View>
            <Text>{dayjs(rowData.date).fromNow(true)} remaining</Text>
          </View>
        </Animatable.View>
      ))}
      {/* <Animatable.View
        animation="fadeIn"
        delay={id * 500}
        style={tw.style(
          'rounded-lg bg-[#ECF1F4] px-4 py-2',
          id !== data?.data?.length - 1 && 'mb-4',
        )}>
        <View style={tw`bg-[#8C8CA2] p-2 rounded-lg`}>
          <Text style={tw`font-bold capitalize`}>{data?.reason}</Text>
          <View style={tw`flex-row items-center my-[7.5px]`}>
            <Text>Dr {data?.data.doctor?.firstName}</Text>
            <DotIcon style={tw`mx-[10px]`} />
            <Text>{dayjs(data.date).format('h:mmA')}</Text>
          </View>
          <Text>{dayjs(data?.date).fromNow(true)} remaining</Text>
        </View>
      </Animatable.View> */}
    </View>
  );
};

export default renderDetail;
