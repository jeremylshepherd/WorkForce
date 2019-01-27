import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
    }

    render() {
        return (
            <FlatList
                    style={{ flex: 1 }}
                    data={this.props.employees}
                    renderItem={({ item }) => <ListItem {...item} />}
                    keyExtractor={item => item.uid }
            />
        );
    }
};

const transformObjToArr = obj => {
    return Object.keys(obj).map(o => {
        return {
            ...obj[o],
            uid: o
        };
    });
};

const mapStateToProps = state => {
    const employees = transformObjToArr(state.employees);

    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);