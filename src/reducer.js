import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    emplyeeInfo: {},
    selectedEmplyee: []
  };

const employeeSlice = createSlice({
      name: 'employee',
      initialState,
      reducers: {
          employeeData: (state, action) => {
              debugger;
              state.emplyeeInfo = action.payload;
            },
          setSelectedEmployeeData:(state, action) => {
            debugger;
            state.selectedEmplyee = action.payload;
          },
            
        }
        
    })
export const getEmployeeInformation = (state) => state.employee.emplyeeInfo;
export const getSelectedEmployeeInformation = (state) => state.employee.selectedEmplyee;
export default employeeSlice.reducer;

