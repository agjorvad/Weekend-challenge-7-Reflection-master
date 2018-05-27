import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Admin extends Component {
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
                                < TableRow>
                                </TableRow>
                    </TableBody>
                </Table>
      </div>
    );
  }
}

export default Admin;