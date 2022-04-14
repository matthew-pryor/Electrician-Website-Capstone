import React from "react";
import {Row, Col, Form, Button, Space, Input} from 'antd';
import 'antd/dist/antd.css'

const Email = (props) => {

    const [form] = Form.useForm();
    const {TextArea} = Input;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('');

    const onComplete = (fields) => {
        const message = {
            to: 'pryor.matthew.a@gmail.com',
            from: fields.email,
            subject: fields.subject,
            html: `
            <p><strong>Name:</strong> ${fields.name}</p>
            <p>${fields.message}</p>
            `
        }
        
        sgMail
        .send(message)
        .then(()=>{
            form.resetFields();
            console.log('Email Sent!');
        })
        .catch((error)=>{
            console.error('Error: ', error)
        });
    }

    return ( 
        <Row gutter={24} style={{padding: '30px'}}>
            <Col xl={12}>
                <Form layout="vertical" form={form} onFinish={onComplete}>

                    <Form.Item name='name' label='Name' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name='email' label='Email' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name='phone' label='Phone Number' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name='date' label='Requested Date for Services' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name='subject' label='Subject' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name='descripition' label='Description of Service' rules={[{required: true}]}>
                        <TextArea/>
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type='primary' htmlType="submit">Submit</Button>
                            <Button type='secondary' htmlType="submit" onClick={(e)=>form.resetFields()}>Clear</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
     );
}
 
export default Email;