import Ajv from 'ajv';

const ajv = new Ajv();

export function validateSchema(schema: object, data: object) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
    throw new Error('Falha na validação de contrato!');
  }
}