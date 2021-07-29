import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Button, Text, View } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector/HorizontalSelector';
import { SearchBar } from '../components/SearchBar';
import { getBatchYears } from '../remote/CaliberBatchAPI';
import Batch from '../models/batch';
import { styles1 } from '../styles/style1';
=======
import { View } from 'react-native';
import { Button, Text } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector/HorizontalSelector';
import Batch from '../models/Batch';
import { getBatchYears } from '../remote/CaliberBatchAPI';
>>>>>>> 51efbae (Fixing merge conflicts with BatchSelectionScreen)

type Props = {

}

const DATA:Array<Batch> = [
  {
    batchId: '123123',
    batchTitle: '05132020 Cloud Native Matt',
    trainers: [
      {
        userId: '848a91eb-1829-4cc5-8386-c7f6738f76ab',
        role: 'Trainer',
      },
    ],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    associates: [

    ],
    notes: [

    ],
  },
  {
    batchId: 'tryhtry',
    batchTitle: '05132020 Cloud Native Matt',
    trainers: [
      {
        userId: '848a91eb-5321-4cc5-8386-c7f6738f76ab',
        role: 'Trainer',
      },
    ],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    associates: [

    ],
    notes: [

    ],
  },

];

const BatchSelectionScreen: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>();

  useEffect(() => {
    // Retrieves a list of years which contain batches and sets the component state
    const retrieveBatchYears = async (): Promise<void> => {
      setYears(await getBatchYears());
    };
    retrieveBatchYears();
  }, []);

  // useEffect(() => {

  // }, [selectedYear]);

  console.log('Batch Selection');
  return (
    <>
      <Text>this is the Batch selection screen</Text>
      <Button title='Week Notes' onPress={(): void => navigation.navigate('NoteNavigation', { text: 'Hey' })}/>
<<<<<<< HEAD

      <View style={ { flex: 1 } }>
        <HorizontalSelector data={years} onPress={setSelectedYear} />
        <View style = {styles1.container}>
          <View style = {styles1.break}/>
          <SearchBar batchData={DATA} />
        </View>
=======
      <View style={ { flex: 1 } }>
        <HorizontalSelector data={years} onPress={setSelectedYear} />
>>>>>>> 51efbae (Fixing merge conflicts with BatchSelectionScreen)
      </View>

      <View style={ { flex: 8 } }>
        {/* {
          selectedYear ? (
            <BatchList year={selectedYear} />
          ) : (
            <Text>Select a year</Text>
          )
        } */}
      </View>
    </>
  );
};

export default BatchSelectionScreen;
