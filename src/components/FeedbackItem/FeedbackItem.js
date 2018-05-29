import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
class FeedbackItem extends Component {

    render() {
        return (
            < TableRow>
                <TableCell>
                    {this.props.item.feeling}
                </TableCell>
                <TableCell>
                    {this.props.item.comprehension}
                </TableCell>
                <TableCell>
                    {this.props.item.support}
                </TableCell>
                <TableCell>
                    {this.props.item.comments}
                </TableCell>
                <TableCell>
                    <Button onClick={() => { this.props.delete(this.props.item.id) }} variant="raised" color="secondary">
                        Delete
<Delete />
                    </Button>
                </TableCell>
            </TableRow>
        )
    }
}

export default FeedbackItem;