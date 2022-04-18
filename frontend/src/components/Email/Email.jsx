import React from "react";
import {Row, Col, Form, Button, Space, Input} from 'antd';
import 'antd/dist/antd.css'
import './Email.css'

const Email = (props) => {

    const [form] = Form.useForm();
    const {TextArea} = Input;
    const email = props.email;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');

    const onComplete = (fields) => {
        const message = {
            to: email,
            from: fields.email,
            subject: fields.subject,
            html: `
            <p><strong>Name:</strong> ${fields.name}</p>
            <p><strong>Email:</strong> ${fields.email}</p>
            <p><strong>Phone Number:</strong> ${fields.phone}</p>
            <p><strong>Date Requested Services:</strong> ${fields.date}</p>
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
                <Form className="email-form" layout="vertical" form={form} onFinish={onComplete}>

                    <Form.Item name='name' label='Name' rules={[{required: true}]}>
                        <Input style={{width: 500}}/>
                    </Form.Item>

                    <Form.Item name='email' label='Email' rules={[{required: true}]}>
                        <Input style={{width: 500}}/>
                    </Form.Item>

                    <Form.Item name='phone' label='Phone Number' rules={[{required: true}]}>
                        <Input style={{width: 500}}/>
                    </Form.Item>

                    <Form.Item name='date' label='Requested Date for Services' rules={[{required: true}]}>
                        <Input style={{width: 500}}/>
                    </Form.Item>

                    <Form.Item name='subject' label='Subject' rules={[{required: true}]}>
                        <Input style={{width: 500}}/>
                    </Form.Item>

                    <Form.Item name='message' label='Description of Service' rules={[{required: true}]}>
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