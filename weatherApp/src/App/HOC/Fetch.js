// TODO: Transition to using this HOC

// import React from 'react';
// import axios from 'axios';

// const withFetching = (url) => {
//   return ((Component) => {
//     class WithFetching extends React.Component {
//       constructor(props) {
//         super(props);

//         this.state = {
//           data: null,
//           isLoading: false,
//           error: null,
//         };
//       }

//       componentDidMount() {
//         this.setState({ isLoading: true});

//         axios.get(url)
//           .then( (result) => {
//             this.setState({
//               data: result.data,
//               isLoading: false
//             })
//           })
//           .catch(error => this.setState({
//             error,
//             isLoading: false
//           }));
//       }

//       render() {
//         return <Component {...this.props} {...this.state} />;
//       }
//     }
//   });
// }

// export default withFetching;