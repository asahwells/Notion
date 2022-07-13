import React, {useEffect, useState, FC} from 'react';
import {Text, Image, ScrollView, View, Pressable} from 'react-native';
import useAppointment from '../hooks/useAppointment';
import tw from 'twrnc';
import {Loading} from '../loader';
interface IProps {
  setClickedItem: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  selectedTab: string;
}
const Categories: FC<IProps> = ({
  setClickedItem,
  setSelectedTab,
  selectedTab,
}) => {
  const {data: dat, loading} = useAppointment();
  const [selectedId, setSelectedId] = useState('');
  // console.log(dat);
  useEffect(() => {
    const val = dat?.appoint?.filter(item => {
      return Object.values(item.doctor.id).join('') === selectedId;
    });
    setClickedItem(val);
  }, [dat?.appoint, selectedId]);
  const itemz = dat?.appoint?.map(r => r.doctor);
  return (
    <View style={tw` mt-1 py-3 pl-5`}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={tw`py-[3px] pl-5 px-3`}>
        {loading ? (
          <View style={tw`justify-center items-center`}>
            <Loading />
          </View>
        ) : (
          <>
            <Pressable
              style={tw`flex-col mr-7  rounded-lg min-w-[50px] justify-center items-center ${
                selectedTab === 'All' ? 'bg-[#0E0E2C] ' : 'bg-[#eeee]'
              }`}
              onPress={() => {
                setSelectedTab('All');
                setSelectedId('');
              }}>
              <Text
                style={tw`font-extrabold text-base  ${
                  selectedTab === 'All' ? 'text-white ' : 'text-[#0E0E2C]'
                }`}>
                All
              </Text>
            </Pressable>
            {itemz?.map(item => (
              <Pressable
                style={tw`flex-col mr-7 rounded-lg min-w-[50px] justify-center items-center p-2 ${
                  selectedId === item.id ? 'bg-[#0E0E2C] ' : 'bg-[#eeee]'
                } `}
                onPress={() => {
                  setSelectedId(item.id);
                  setSelectedTab('Individual');
                }}
                key={item.id}>
                <Text
                  style={tw`font-extrabold text-base  ${
                    selectedId === item.id ? 'text-white ' : 'text-[#0E0E2C]'
                  } `}>
                  {item.firstName}
                </Text>
              </Pressable>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default Categories;
