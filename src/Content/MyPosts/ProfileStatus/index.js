import React from "react";
import style from "../ProfileStatus/style.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activedEditeMode = () => {
    this.setState({
      editMode: true,
      // status: this.props.status,
      status: this.state.status || this.props.status,
    });
  };
  deActivedEditeMode = () => {
    this.setState({
      editMode: false,
    });
    // this.props.updateStatus(this.state.status);
    this.props.onStatusChange(this.props.status);
  };
  onStatusChange = (e) => {
    console.log(e.currentTarget.value, "e.currentTarget.value");
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        {!this.state.editMode && (
          <div onClick={this.activedEditeMode}>
            {this.state.status || this.props.status}
          </div>
        )}
        {this.state.editMode && (
          <div className={style.profileInput}>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deActivedEditeMode}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
