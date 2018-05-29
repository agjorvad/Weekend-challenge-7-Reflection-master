import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackList: [],
        }
    }
// Get request
    getFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                this.setState({
                    feedbackList: response.data
                });
                console.log(response.data);
            })
            .catch(error => {
                alert('error');
                console.log(`error on get', ${error}`);
            });
    }
// Delete request
    deleteFeedback = (entryToDelete) => {
        console.log(entryToDelete)
        axios({
            method: 'DELETE',
            url: `/api/feedback/${entryToDelete}`,

        })
            .then((response) => {
                console.log('success', response);
                this.getFeedback();
            })
            .catch((error) => {
                console.log('There was a problem', error);
            })
    }
// Get feedback runs on page load
    componentDidMount = () => {
        this.getFeedback();
    }

// Dialog box to confirm delete
    confirmDelete = (entryToDelete) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete feedback from database?',
            buttons: [
                {
// If yes, run delete request
                    label: 'Yes',
                    onClick: () => this.deleteFeedback(entryToDelete)
                },
                {
                    label: 'No',
                    onClick: () => alert('Delete cancelled')
                }
            ]
        })
    };

    render() {
        return (
            <div className="Admin">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackList.map(item =>
                            <FeedbackItem key={item.id}
                                item={item}
                                delete={this.confirmDelete} />
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Admin;