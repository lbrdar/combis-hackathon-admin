import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const paramKeys = /:(\w+)/g;

const paramReplace = (text, params = {}) => (
  text.replace(paramKeys, (_, key) => (params[key] || ''))
);

const createLink = (routePath, params) => {
  const link = routePath
    .map(routeName => routeName.startsWith('/') ? routeName : `/${routeName}`)
    .join('')
    .replace(/\/\//g, '/')
    .replace(/[{()}]/g, '');

  return paramReplace(link, params);
};

const styles = {
  container: {
    display: 'flex',
    fontSize: 16,
  },
};

function Breadcrumb(props) {
  const link = createLink(props.routes, props.routeParams);
  const linkItems = link.split('/').filter(linkItem => !!linkItem);
  const breadCrumbs = [<div style={{ paddingRight: 5 }} key="start_breadcrumb">/</div>];

  linkItems.forEach((item, index) => {
    breadCrumbs.push(
      <div key={`${item}_${index}`}>
        <Link to={`/${linkItems.slice(0, index + 1).join('/')}/`}>
          {item.replace(/^(.{18}).+/, '$1...')}
        </Link>
      </div>
    );
    breadCrumbs.push(
      <div style={{ paddingRight: 5, paddingLeft: 5 }} key={`${index}_${item}`}>/</div>
    );
  });

  return (
    <div style={styles.container}>
      {breadCrumbs}
    </div>
  );
}

Breadcrumb.defaultProps = {
  routeParams: {},
};

Breadcrumb.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  routeParams: PropTypes.object,
};

export default Breadcrumb;
