import { FC } from 'react';
import { useRootStoreContext } from '../../../../contexts/RootStoreContext';
import { useFormik } from 'formik';
import { InputField } from '../../../../shared/components/InputField';
import { RadioButton } from '../../../../shared/components/RadioButton';
import { FileInput } from '../../../../shared/components/FileInput';
import { Button } from '../../../../shared/components/Button';
import { observer } from 'mobx-react-lite';
import { SignUpSchema } from './validationSchema';
import { Spinner } from '../../../../shared/components/Spinner';
import { SignUpFormData, responseErr } from './types';
import styles from './SignUpForm.module.scss';

export const SignUpForm: FC = observer(() => {
  const { positionsStore, userStore } = useRootStoreContext();

  const formik = useFormik<SignUpFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: '',
      photo: null,
    },
    onSubmit: async (values, helpers) => {
      try {
        await userStore.createUser(values);
        helpers.resetForm();
      } catch (errors) {
        if (typeof (errors as responseErr) !== 'string') {
          helpers.setErrors(errors as responseErr);
        }
      }
    },
    validationSchema: SignUpSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <>
      <form noValidate autoComplete="off" className={styles.form}>
        {userStore.isUserCreating && (
          <div className={styles.spinnerWrapper}>
            <Spinner className={styles.spinner} />
          </div>
        )}
        <InputField
          name="name"
          type="text"
          label="your name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          isError={!!formik.touched.name && !!formik.errors.name}
          errorText={formik.errors.name}
          onChange={(e) => {
            formik.handleChange(e);
          }}
        />
        <InputField
          name="email"
          type="email"
          label="email"
          value={formik.values.email}
          onChange={(e) => {
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          isError={!!formik.touched.email && !!formik.errors.email}
          errorText={formik.errors.email}
        />
        <InputField
          name="phone"
          type="tel"
          label="phone"
          helperText="+38 (XXX) XXX - XX - XX"
          value={formik.values.phone}
          onChange={(e) => {
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          isError={!!formik.touched.phone && !!formik.errors.phone}
          errorText={formik.errors.phone}
        />
        <div className={styles.positions}>
          <p className={styles.heading}>Select your position</p>
          {positionsStore.positionsList.map((p) => (
            <RadioButton
              id={`${p.id}-${p.name}`}
              name={`${p.id}-${p.name}`}
              key={p.id}
              value={p.id.toString()}
              label={p.name}
              checked={formik.values.position_id === +p.id}
              onChange={async (e) => {
                await formik.setFieldValue('position_id', +e.target.value);
                await formik.setFieldTouched('position_id', true);
                formik.setFieldError('position_id', undefined);
              }}
              className={styles.radioSpacing}
            />
          ))}
          {formik.touched.position_id && formik.errors.position_id && (
            <p className={styles.positionError}>{formik.errors.position_id}</p>
          )}
        </div>
        <FileInput
          name="photo"
          id="photo"
          placeholder="Upload your photo"
          value={formik.values.photo}
          buttonText="upload"
          onChange={async (e) => {
            if (e.target.files?.length) {
              await formik.setFieldValue('photo', e.target.files[0]);
              formik.setFieldError('photo', undefined);
            }
          }}
          onBlur={async () => await formik.setFieldTouched('photo', true)}
          isError={formik.touched.photo && !!formik.errors.photo}
          errorText={formik.errors.photo}
        />
      </form>
      <Button
        disabled={
          userStore.isUserCreating ||
          Object.keys(formik.touched).length !==
            Object.keys(formik.values).length ||
          !!Object.keys(formik.errors).length
        }
        className={styles.button}
        onClick={() => formik.handleSubmit()}
      >
        Sign up
      </Button>
    </>
  );
});
