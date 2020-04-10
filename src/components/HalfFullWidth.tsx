import React, {useState} from "react";
import { Input, Button, Row, Col, notification } from 'antd';

const { TextArea } = Input;

export default function HalfFullWidth() {

    const [inputContent, setInputContent] = useState('')
    const [outputContent, setOutputContent] = useState('')

    function toHalfWidth() {
        setOutputContent(inputContent.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)}));
    }


    function toFullWidth() {
        setOutputContent(inputContent.replace(/[A-Za-z0-9]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) + 0xFEE0)}));
    }

    // @ts-ignore
    const clipboard = new ClipboardJS('.copy');
    clipboard.on('success', function(e) {
        let type = 'success'
        if(outputContent === '') {
            type = 'error'
        }
        try {
            notification.destroy()
        } catch (e) {
            console.log("can't find notification")
        }
        notification[type]({
            message: `Copy ${type}`,
        });
    });

    return (
        <div style={{ margin: 24 }}>
            <Row>
                <Col span={10}>
                    <TextArea
                        value={inputContent}
                        onChange={ ({ target: { value } }) => {
                            setInputContent(value)
                        } }
                        placeholder="Input"
                        autoSize={{ minRows: 20 }}
                    />
                </Col>
                <Col span={4} style={{display: 'flex', flexDirection: 'column',padding: '15px'}}>
                    <Button style={{ marginBottom: 16 }} type="primary" onClick={toFullWidth}>To full width</Button>
                    <Button style={{ marginBottom: 16 }}  type="primary" onClick={toHalfWidth}>To half width</Button>
                    <Button className={'copy'} type="primary" data-clipboard-target="#outputContent">Copy</Button>
                </Col>
                <Col span={10}>
                    <TextArea
                        id="outputContent"
                        value={outputContent}
                        readOnly={true}
                        placeholder="Output"
                        autoSize={{ minRows: 20 }}
                    />
                </Col>
            </Row>
        </div>
    );

}