import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import './Form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('nhap title').max(70, 'toi da 70 ky tu'),
  url: yup.string().required('nhap url'),
});

export default function PhotoForm(props) {
  const { getValue } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => getValue(data);

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="formGroup">
          <Label for="title" style={{ color: 'lightseagreen' }}>
            Title
          </Label>
          <input
            type="text"
            id="title"
            placeholder="_Eg : Beautiful Photo"
            className="input"
            {...register('title')}
          />
          {errors.title && <p className="error">{errors.title?.message}</p>}
        </FormGroup>

        <FormGroup className="formGroup">
          <Label for="url" style={{ color: '#ee9ca7' }}>
            Url of image
          </Label>
          <input
            type="text"
            id="url"
            placeholder="_Eg : ...beautifulImage.png"
            className="input"
            {...register('url')}
          />
          {errors.url && <p className="error">{errors.url?.message}</p>}
        </FormGroup>

        <FormGroup className="formGroup">
          <Label for="category" style={{ color: '#7b4397' }}>
            Category
          </Label>
          <select id="category" {...register('category')} className="input">
            <option value="nature">Nature</option>
            <option value="person">Person</option>
            <option value="animal">Animal</option>
          </select>
        </FormGroup>
        <FormGroup className="formGroup">
          <Label for="photo">Photo</Label>
          <button id="photo">Check Photo</button>
          <div>
            <img src="" alt="" />
          </div>
        </FormGroup>
        <FormGroup type="submit">
          <Button>Add to album</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
