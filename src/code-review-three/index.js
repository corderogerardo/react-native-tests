/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const getValueFromSchema = (data, schema) => {
  if (!data || !schema) {
    return null;
  }

  if (schema.formatter) {
    return schema.formatter(data[schema.accesor]);
  }

  return data[schema.accesor];
};

const EditionForm = ({ data, onUpdate, schema, title, updateTitle }) => {
  const getControllerBasedOnType = useCallback(
    (schemaNode) => {
      switch (schemaNode.type) {
        case "input":
        case "number":
          return (
            <Input
              defaultValue={getValueFromSchema(data, schemaNode)}
              disabled={schemaNode.disabled}
              name={schemaNode.accesor}
              placeholder={schemaNode.placeholder}
              type={schemaNode.type}
            />
          );

        case "textarea":
          return (
            <Input
              defaultValue={getValueFromSchema(data, schemaNode)}
              name={schemaNode.accesor}
              placeholder={schemaNode.placeholder}
              type="textarea"
            />
          );

        default:
          return <></>;
      }
    },
    [data]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const dataSet = {};
      (schema?.accesors || []).forEach((attribute) => {
        dataSet[attribute.accesor] = e.target[attribute.accesor]?.value;
      });

      onUpdate(data.id, dataSet);
    },
    [schema]
  );

  return (
    <Card className="card-user">
      <CardHeader>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row className="pr-3 pl-3">
            {schema?.accesors &&
              schema.accesors.map(
                (schemaNode) =>
                  schemaNode?.size && (
                    <Col
                      className="pr-1 pl-1"
                      sm={`${schemaNode.size.sm}`}
                      md={`${schemaNode.size.md}`}
                      lg={`${schemaNode.size.lg}`}
                      key={`toolFormController.${data.id}.${schema.identifier}.${schemaNode.label}`}
                    >
                      <FormGroup>
                        <label>{schemaNode.label}</label>
                        {getControllerBasedOnType(schemaNode)}
                      </FormGroup>
                    </Col>
                  )
              )}
          </Row>
          <Row>
            <div className="update ml-auto mr-auto">
              <Button className="btn-round" color="primary" type="submit">
                {updateTitle || "Update"}
              </Button>
            </div>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default EditionForm;
