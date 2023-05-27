import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { countries } from "../../../data/countries";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  getUserInfo,
  userInfoShipping,
} from "../../../features/slice/userInfoSlice";

export interface IInformationFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export default function InformationForm(props: IInformationFormProps) {
  let { userInfo } = useAppSelector((state) => state.userInfo);
  let dispatch = useAppDispatch();
  let [storeUserInfo, setStoreInfo] = useState<any>(userInfo);

  useEffect(() => {
    let res = localStorage.getItem("userInfo");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getUserInfo(items));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div className="my-8">
      <p className="text-lg font-medium mb-4">Shipping address</p>
      <div className="flex flex-col gap-4">
        <FormControl
          fullWidth
          error={props.errors.country?.type === "required"}
        >
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            {...props.register("country", { required: true })}
            labelId="demo-simple-select-label"
            label="Country"
            value={userInfo.country}
            onChange={(e) => {
              dispatch(getUserInfo({ ...userInfo, country: e.target.value }));
            }}
          >
            {countries.map((country: any) => (
              <MenuItem value={country.name} key={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
          {props.errors.country?.type === "required" && (
            <span className="text-xs text-red-500">Country is required</span>
          )}
        </FormControl>
        <div className="flex gap-4">
          <TextField
            sx={{ width: "50%", fontSize: "14px" }}
            label="First name (optional)"
            variant="outlined"
            value={userInfo.firstName}
            onChange={(e) =>
              dispatch(getUserInfo({ ...userInfo, firstName: e.target.value }))
            }
          />
          <div className="basis-1/2">
            <TextField
              error={props.errors.name?.type === "required"}
              {...props.register("name", { required: true })}
              sx={{ width: "100%", fontSize: "14px" }}
              label="Last name"
              variant="outlined"
              value={userInfo.lastName}
              onChange={(e) =>
                dispatch(getUserInfo({ ...userInfo, lastName: e.target.value }))
              }
            />
            {props.errors.name?.type === "required" && (
              <span className="text-xs text-red-500">
                Last name is required
              </span>
            )}
          </div>
        </div>
        <div>
          <TextField
            error={props.errors.address?.type === "required"}
            {...props.register("address", { required: true })}
            sx={{ width: "100%", fontSize: "14px" }}
            label="Address"
            variant="outlined"
            value={userInfo.address}
            onChange={(e) =>
              dispatch(getUserInfo({ ...userInfo, address: e.target.value }))
            }
          />
          {props.errors.address?.type === "required" && (
            <span className="text-xs text-red-500">Adress is required</span>
          )}
        </div>
        <div>
          <TextField
            sx={{ width: "100%", fontSize: "14px" }}
            label="Apartment, suite, etc. (optional)"
            variant="outlined"
            value={userInfo.apartment}
            onChange={(e) =>
              dispatch(getUserInfo({ ...userInfo, apartment: e.target.value }))
            }
          />
        </div>
        <div className="flex gap-4">
          <div className="basis-1/2">
            <TextField
              error={props.errors.city?.type === "required"}
              {...props.register("city", { required: true })}
              sx={{ width: "100%", fontSize: "14px" }}
              label="City"
              variant="outlined"
              value={userInfo.city}
              onChange={(e) =>
                dispatch(getUserInfo({ ...userInfo, city: e.target.value }))
              }
            />
            {props.errors.city?.type === "required" && (
              <span className="text-xs text-red-500">City is required</span>
            )}
          </div>
          <TextField
            sx={{ width: "50%", fontSize: "14px" }}
            label="Postal code"
            variant="outlined"
            value={userInfo.postalCode}
            onChange={(e) =>
              dispatch(getUserInfo({ ...userInfo, postalCode: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );
}
