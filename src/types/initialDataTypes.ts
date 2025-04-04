import { SignUpStoreStateType } from './storeDataTypes';

export interface DropDownOption {
  value: string;
  label: string;
}

export interface SignUpStepType {
  stepId: number;
  isEnable: boolean;
  messages: string[];
  requiredFields: (keyof SignUpStoreStateType)[];
  item: React.FC<{
    step: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessages: Partial<SignUpStoreStateType>;
    inputValues: SignUpStoreStateType;
  }>;
}
