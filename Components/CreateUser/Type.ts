export type TValues = {
    firstName: string;
    middleName?: string;  
    lastName: string;
    username: string;
    password: string;
    occupation: string;
    phoneNumber: string;
    emailAddress: string;
    dateOfBirth: string
    maritalStatus: string;
    gender: string;
    residentialAddress: string;
    accountType: string;
    registrationDate: string;
    totalBalance: string;
    availableBalance: string;
    accountNumber: string;
    accountCurrency: string;
    cotCode: string;
    taxCode: string;
    imfCode: string;
    loginPin: string;
    domesticTransferPin: string;
  }
  export type Field =  {
    name: string;
    label: string;
    options?: string[]; 
  }