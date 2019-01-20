import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Log In" initial />                
                </Scene>
                <Scene key="main">
                    <Scene 
                        key="employeeCreate" 
                        title="Create Employee"
                        component={EmployeeCreate} 
                    />

                    <Scene 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        rightTitle="ADD"
                        onRight={() => { Actions.employeeCreate(); }}
                        initial />                
                </Scene>
                
            </Scene>
        </Router>
    );
}

export default RouterComponent;