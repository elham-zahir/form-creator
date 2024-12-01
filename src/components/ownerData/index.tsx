import TextInput from "../textInput";
import PhoneNumberInput from "../phoneNumberInput";
import NationalCodeInput from "../nationalCodeInput";
import AgeInput from "../ageInput";
import GenderSelection from "../gender";
import EmailInput from "../emailInput";
import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";
import React from "react";
import SampleIcon from "../../icons/AlIcon";

function OwnerDataTab({ form }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام" name="firstName" form={form} required={true} />
      </Col>

      <Col span={12}>
        <TextInput
          label="نام خانوادگی"
          name="lastName"
          form={form}
          required={true}
        />
      </Col>

      <Col span={12}>
        <PhoneNumberInput
          label="شماره تلفن"
          name="phoneNumber"
          form={form}
          required={true}
        />
      </Col>

      <Col span={12}>
        <EmailInput label="ایمیل" name="email" form={form} required={false} />
      </Col>

      <Col span={12}>
        <NationalCodeInput
          name="nationalCode"
          label="کد ملی"
          form={form}
          required={false}
        />
      </Col>

      <Col span={12}>
        <AgeInput name="age" label="سن" form={form} required={false} />
      </Col>

      <Col span={12}>
        <GenderSelection
          name="gender"
          label="جنسیت"
          form={form}
          required={true}
        />
      </Col>
    </Row>
  );
}

export default OwnerDataTab;
