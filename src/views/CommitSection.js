
import React, {Component} from 'react';
import { endpoint } from "@octokit/endpoint";
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import List from '@material-ui/core/List';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemText from '@material-ui/core/ListItemText';
  import ListSubheader from '@material-ui/core/ListSubheader';

  const requestOptions = endpoint("GET /repos/{owner}/{repo}/commits", {
    headers: {
      authorization: "token 524b2e08acd1cc789d7663507c5775872880de9b",
    },
    owner: "CPure",
    repo: "myrepoproject",
    type: "private",
  });
  const { url, options } = requestOptions;

  class CommitSection extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            commits: []
        };
    }
    async componentDidMount() {
    
    //console.log(requestOptions);
    await fetch(url, options).then(response=> response.json()).then(data => this.setState({commits:data}));
    }

  render(){
      
    console.log(this.state.commits);
    return (
        <div className="section section-buttons">
             <Container>
             <div className="title">
            <h2>Commits myrepoproject</h2>
          </div>
          <List  subheader={<li />}>
                {this.state.commits.map((item,key) => (
                    
                    <li key={key} >
                    <ul >
                        <ListItem button  component="a" href={item.html_url} target="_blank">{`${item.commit.message} -  ${item.commit.author.name} - ${new Date(item.commit.author.date).toString().slice(4,25)}`}</ListItem>
                        
                    </ul>
                    </li>
                ))}
            </List>
           
            </Container>
        </div>
        );
    }
}
  
export default CommitSection;