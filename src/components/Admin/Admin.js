import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Admin extends Component {
    constructor() {
        super();
        this.state = {
            feedbackList: [],
        }
    }

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

    componentDidMount = () => {
        this.getFeedback();
    }

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
                        {this.state.feedbackList.map((feedback, i) => 
                                < TableRow key ={i}>
                                <TableCell>
                                    {feedback.Feeling}
                                    </TableCell>
                                    <TableCell>
                                    {feedback.Comprehension}
                                    </TableCell>
                                    <TableCell>
                                    {feedback.Support}
                                    </TableCell>
                                    <TableCell>
                                    {feedback.Comments}
                                    </TableCell>
                                </TableRow>
                                )}
                    </TableBody>
                </Table>
      </div>
    );
  }
}

export default Admin;