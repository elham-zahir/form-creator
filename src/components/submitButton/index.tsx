import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Form } from "antd";

interface IProps {
  isEditMode: boolean;
}

function SubmitButton({ isEditMode }: IProps) {
  return (
    <Col span={12}>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submitButton}
        >
          {isEditMode ? " ویرایش" : " ثبت"} اطلاعات
        </Button>
      </Form.Item>
    </Col>
  );
}

export default SubmitButton;
