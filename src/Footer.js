import React from 'react';
import {Icon, Grid} from 'semantic-ui-react';
import styles from './Footer.module.css';

export const Footer = ({userdata}) => {
  return (
    <>
      {
        (userdata.email)?(
          <div className={styles.footer}>
            <Grid centered columns={4}>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Icon name='github'/>
                  <a href={userdata.github} className={styles.link}>{userdata.github}</a>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='mail'/>
                  <a href={userdata.email} className={styles.link}>{userdata.email}</a>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='call'/>
                  {userdata.mobile}
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='linkedin'/>
                  <a href={userdata.linkedin} className={styles.link}>{userdata.linkedin}</a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ):
        (<div/>)
      }
    </>
  );
}
