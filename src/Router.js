import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { sanFranciscoWeights } from 'react-native-typography';


const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.header} sceneStyle={styles.scene}>           
            <Scene key="root" titleStyle={styles.text} hideNavBar>            
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="login" 
                        initial
                    />                
                </Scene>
                <Scene key="main">
                    <Scene 
                        key="employeeCreate" 
                        title="Create Apprentice"
                        component={EmployeeCreate}
                        onLeft={() => Actions.employeeList({ type: 'reset' })}
                        leftTitle="CANCEL"
                        leftButtonTextStyle={{ ...styles.text, fontSize: 12 }}
                    />

                    <Scene
                        key="employeeEdit"
                        title="Update Apprentice"
                        component={EmployeeEdit}
                        onLeft={() => Actions.employeeList({ type: 'reset' })}
                        leftTitle="CANCEL"
                        leftButtonTextStyle={{ ...styles.text, fontSize: 12 }}
                    />

                    <Scene 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="APPRENTICES" 
                        rightTitle="ADD"
                        rightButtonTextStyle={{ ...styles.text, fontSize: 12 }}
                        onRight={() => { Actions.employeeCreate(); }}
                        initial 
                    />                
                </Scene>
                
            </Scene>
        </Router>
    );
};

const styles =  {
    text: {
        ...sanFranciscoWeights.heavy,
        fontSize: 18,
        color: '#ccc',
        textTransform: 'uppercase'
    },
    header: {
        backgroundColor: '#2d3436',
    },
    subheader:{
        backgroundColor: '#eee', 
        height: 7
    },
    subtitle:{
        fontSize: 16,
        color: 'darkslategrey',
        textTransform: 'uppercase',
        marginTop: -40, 
        paddingTop: 0
    },
    scene: {
        backgroundColor: '#eee'
    }

}

export default RouterComponent;