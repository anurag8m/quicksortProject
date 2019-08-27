import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
class Test extends Component {
    constructor(props) {

        super(props);
        this.state = {
            number: "",
            finaltxt: "",
            newArray: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // function for quick sort
    swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    partition(arr, pivot, left, right) {
        var pivotValue = arr[pivot],
            partitionIndex = left;

        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                this.swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(arr, right, partitionIndex);
        return partitionIndex;
    }

    quickSort(arr, left, right) {
        var len = arr.length,
            pivot,
            partitionIndex;


        if (left < right) {
            pivot = right;
            partitionIndex = this.partition(arr, pivot, left, right);

            //sort left and right
            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        var num = this.state.number;
        var str = num.replace(/,\s*$/, "");
        var array = str.split(",");
        for (var i = 0; i < array.length; i++) {
            this.state.newArray.push(Number(array[i]))
        }

        var sortedArray = this.quickSort(this.state.newArray, 0, this.state.newArray.length - 1);
        var finalnum = "Output is - " + sortedArray.join(); //prints [2,3,5,6,7,9]
        this.setState({ finaltxt: finalnum, newArray: [] });
        console.log(sortedArray);
    }
    render() {



        return (
            <div className="container">
                <div> <h2>Please Input numbers in comma seperated:</h2> </div>
                <form onSubmit={this.onSubmit} noValidate>
                    <input
                        type="text"
                        className='form-control'
                        id="number"
                        name="number"
                        placeholder="Enter numbers in comma seperated i.e 23,67, 34 ...."
                        onChange={this.onChange}
                        value={this.state.number}
                    />
                    <br />

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary pull-right"
                            id="btnContactUs"

                        >
                            SUBMIT
 </button><br /><br />
                        <h3>{this.state.finaltxt}</h3>
                    </div></form>

            </div>
        );
    }
}



export default Test;


