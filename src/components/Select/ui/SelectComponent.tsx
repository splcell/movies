import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { SelectActions } from '../model/slice/selectSlice';
import { useCallback } from 'react';
import { MoviesListActions } from '../../MoviesList/model/slice/moviesSlice';
import { PaginationActions } from '../../Pagination/model/slice/paginationSlice';

export function SelectComponent(){
  const dispatch = useDispatch()
  const customStyles = {
    control: (provided: {}, state: { isFocused: boolean }) => ({
      ...provided,
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginRight: 'auto',
      boxShadow: state.isFocused ? '0 0 0 2px #2c2c2c' : 'none',
      '&:hover': {
        border: '0.5px solid #2c2c2c',
      },
    }),
    option: (provided: {}, state: { isSelected: boolean } ) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ffc902' : 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: '#eeeeee',
        color: 'black',
      },
    }),
  };

  const options = [
    {value: '', label: 'All'},
    {value: 'movie', label: 'Movie'},
    {value: 'series', label: 'Series'},
    {value: 'episode', label: 'Episode'},
    {value: 'game', label: 'Game'},
  ]

  // const handleSelectChange = (selectedOption: any) => {
  //   dispatch(SelectActions.changeType(selectedOption.value))
  // };

  const handleSelectChange = useCallback((selectedOption: any) => {
    dispatch(MoviesListActions.cleanMovies())
    dispatch(PaginationActions.removePage())
    dispatch(SelectActions.changeType(selectedOption.value))
  }, [dispatch])

  return(
    <Select options={options} styles={customStyles} onChange={handleSelectChange} defaultValue={options[0]}/>
  )
}