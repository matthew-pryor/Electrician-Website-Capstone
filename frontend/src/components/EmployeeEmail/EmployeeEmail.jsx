import React from "react";
import {Row, Col, Form, Button, Space, Input} from 'antd';
import 'antd/dist/antd.css'
import './Email.css'

const EmployeeEmail = (props) => {

    const [form] = Form.useForm();
    const {TextArea} = Input;
    const email = props.email;
    const start = props.start;
    const end = props.end;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('');

    const onComplete = (fields) => {
        const message = {
            to: email,
            from: fields.email,
            subject: `BlueCollar Electrical Solutions - APPOINTMENT SCHEDULED with ${fields.name}`,
            html: `
            <p><strong>Electrician:</strong> ${fields.name}</p>
            <p><strong>Email:</strong> ${fields.email}</p>
            <p><strong>Phone Number:</strong> ${fields.phone}</p>
            <p><strong>Appointment Scheduled from</strong> ${start} <strong>to </strong> ${end}</p>
            <p>${fields.message}</p>
            `,
            send_at: parseInt(fields.epoch),
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

                    <Form.Item name='epoch' label='Epoch Date' rules={[{required: true}]}>
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
 
export default EmployeeEmail;