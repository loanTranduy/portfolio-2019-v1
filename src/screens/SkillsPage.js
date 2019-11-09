import React, {Fragment} from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import {WorkScreen} from './WorkScreen';
import {FrontEndScreen} from './FrontEndScreen';

const skills = [
    { id: 1, title: 'Front-end', slug: 'front-end' },
    { id: 2, title: 'Web Design', slug: 'web-design' },
    { id: 3, title: 'Graphic Design', slug: 'graphic-design' }
];

const SkillsPage = ({ match }) => (
    <Fragment>
            {skills.map(skill => (
                <section key={skill.id}>
                    <NavLink to={`${match.url}/${skill.slug}`}>
                        {skill.title}
                    </NavLink>
                </section>
            ))}
        <Switch>
            <Route path={`${match.url}`} exact component={WorkScreen} />
        </Switch>
    </Fragment>
);

export default SkillsPage

// <NavLink to={`${match.url}/${skill.slug}`}>


