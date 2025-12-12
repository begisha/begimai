// src/components/RegistrationForm.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Typography } from "antd";
import { toast } from "react-toastify";
import styles from "./RegistrationForm.module.scss";

const { Title } = Typography;

export default function RegistrationForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit = (data) => {
    toast.success(`${data.name} успешно зарегистрированы!`);
  };

  const Star = () => <span className={styles.star}>*</span>;

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Title level={3} className={styles.title}>
          Форма регистрации DZ№6
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Item
            label={
              <>
                Имя <Star />
              </>
            }
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Имя обязательно",
                minLength: { value: 3, message: "Минимум 3 символа" },
              }}
              render={({ field }) => (
                <Input placeholder="Введите имя" {...field} />
              )}
            />
          </Form.Item>

          <Form.Item
            label={
              <>
                Email <Star />
              </>
            }
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email обязателен",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Введите корректный email",
                },
              }}
              render={({ field }) => (
                <Input placeholder="Введите email" {...field} />
              )}
            />
          </Form.Item>

          <Form.Item
            label={
              <>
                Пароль <Star />
              </>
            }
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Пароль обязателен",
                minLength: { value: 8, message: "Минимум 8 символов" },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  message: "Пароль должен содержать буквы и цифры",
                },
              }}
              render={({ field }) => (
                <Input.Password placeholder="Введите пароль" {...field} />
              )}
            />
          </Form.Item>

          <Form.Item
            label={
              <>
                Подтверждение пароля <Star />
              </>
            }
            validateStatus={errors.confirmPassword ? "error" : ""}
            help={errors.confirmPassword?.message}
          >
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Подтвердите пароль",
                validate: (v) => v === password || "Пароли не совпадают",
              }}
              render={({ field }) => (
                <Input.Password placeholder="Повторите пароль" {...field} />
              )}
            />
          </Form.Item>

          <Button type="primary" block htmlType="submit">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}
