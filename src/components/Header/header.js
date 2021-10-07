import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const link = {
  textDecoration: 'none',
  color: '#093637',
};
export default function index() {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem active tag="a" href="#">
          <NavLink style={link} to="/photos">
            Home
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem tag="a">
          {' '}
          <NavLink style={link} to="/photos/add">
            Add New Photo
          </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
