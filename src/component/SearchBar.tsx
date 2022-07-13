import {View, TextInput, Button, Image} from 'react-native';
import React, {FC} from 'react';
import tw from 'twrnc';
// import useAppointment from '../utils/useRestaurant';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import Ionicons from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: FC<IProps> = ({search, setSearch}) => {
  return (
    <View
      style={tw`mt-4 flex-row p-2 bg-[#eee] rounded-lg border-red-500 justify-between items-center`}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search here"
      />

      <Image
        source={require('../assets/images/search.png')}
        style={tw`w-4 h-4`}
      />
    </View>
  );
};
export default SearchBar;
