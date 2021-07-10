export class ConstsValidator {
    private static readonly _phone_mobile_prefix = '0(5[0,2,3,4,7,8,9,5]|7[2,3,4,6,7,8]|[2,3,4,8,9])';
    private static readonly _phone_prefix = '0(7[2,3,4,6,7,8]|[2,3,4,8,9])';
    private static readonly _mobile_prefix = '0(5[0,2,3,4,7,8,9,5])';
    public static readonly PATTERN = {
        phone_prefix: '^' + ConstsValidator._phone_prefix + '$',
        phone_mobile_prefix: '^' + ConstsValidator._phone_mobile_prefix + '$',
        mobile_prefix: '^' + ConstsValidator._mobile_prefix + '$',
        phone: /^[2-9]\\d{6}$/,
        fullphone: '^' + ConstsValidator._phone_prefix + '[2-9]\\d{6}$',
        mobilephone: '^' + ConstsValidator._mobile_prefix + '[2-9]\\d{6}$',
        // tslint:disable-next-line:max-line-length
        email: 	/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9_\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        fname: /^[a-zA-Z\u0590-\u05fe]+[a-zA-Z\u0590-\u05fe\-\']+[a-zA-Z\u0590-\u05fe\-\' ]{0,50}$/,
        lname: /^[a-zA-Z\u0590-\u05fe]+[a-zA-Z\u0590-\u05fe\-\']+[a-zA-Z\u0590-\u05fe\-\' ]{0,58}$/,
        loginUsername: /^[0-9a-zA-Z@_.-]{5,50}$/,
        loginPassword: /^[0-9a-zA-Z]{6,10}$/,
        zipcode: /^[\d]{5}(\d{2})?$/,
        number: /^\d+$/,
        creditCard: /^\d{4}$/,
        datetime: /^\\d{4}\-\\d{2}\-\\d{2} \\d{2}:\\d{2}:\\d{2}$/,
        decimal: /^(?=.?\d)\d*(\.\d{0,9})?$/,
        includeHebrewAndAt: /([\u0590-\u05FF@]+)/,
        supplierNumber: /^[A-Za-z0-9 _.-/]+$/,
        lettersAndSigns: /^[A-Za-z0-9_.\-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]+$/
    };
}
