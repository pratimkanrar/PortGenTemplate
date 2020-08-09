import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import styles from './Skills.module.css';
export const Skills = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className={styles.Body}>
          <Container className={styles.container}>
              {
                (userdata.metas.skills.length!==0)?
                (
                  <div>
                    <Header size='large' content='Skills'/>
                      <Grid centered columns={2}>
                        {userdata.metas.skills.map((skill, index)=>(
                          <Grid.Column textAlign='center'>{skill}</Grid.Column>
                        ))}
                      </Grid>
                  </div>
                ):(<div/>)
              }
            </Container>
        </div>
      <Footer userdata={userdata}/>
    </>
  );
}
