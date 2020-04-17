import React from "react";
import { Transition } from "react-spring/renderprops";

// Containers
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

//styles
import classes from "./Converture.module.scss";

// Requests
import axiosInstance from "../../requests/requests";

class Converture extends React.Component {
  _isMounted = false;

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    console.log(this.props);
  }

  state = {
    youtubeLink: "",
    loading: false,
  };

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.convert();
    }
  };

  convert = async () => {
    this.setState({ loading: true });
    try {
      const katarina = await axiosInstance.get(
        `?link=${this.state.youtubeLink}`
      );
      this.props.history.push({
        pathname: "/sucess",
        state: {
          data: { ...katarina.data, mainArtist: katarina.data.artist[0] },
        },
      });
      if (this._isMounted) this.setState({ loading: false });
    } catch (e) {
      console.log(e);
      if (this._isMounted) this.setState({ loading: false });
      try {
        this.props.history.push({
          pathname: "/error",
          state: { data: e.response.data },
        });
      } catch (e) {
        console.log(e);
        this.props.history.push({
          pathname: "/error",
        });
      }
    }
  };

  setYoutubeLink = (e) => {
    this.setState({ youtubeLink: e.target.value });
  };

  render() {
    const container = (
      <div className={classes.container}>
        <Input
          value={this.state.youtubeLink}
          placeholder="Your YouTube Url"
          onChange={this.setYoutubeLink}
          onKeyDown={this.handleEnter}
        />
        <Button onClick={this.convert}>CONVERTE</Button>
      </div>
    );

    const spinner = <Spinner />;

    const translate = (
      <Transition
        config={{ duration: 1000 }}
        items={this.state.loading}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(toggle) =>
          toggle
            ? (props) => <div style={props}>{spinner}</div>
            : (props) => <div style={props}>{container}</div>
        }
      </Transition>
    );

    return <React.Fragment>{translate}</React.Fragment>;
  }
}

export default Converture;
