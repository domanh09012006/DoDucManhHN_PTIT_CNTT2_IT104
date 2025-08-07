function xuLyDuLieu(input: string | number | boolean) {
    if (typeof input === "string") {
        let check = true;
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (char < '0' || char > '9') {
                check = false;
                break;
            }
        }
        if (check) {
            const num = Number(input);
            console.log("Binh phuong:", num * num);
        } else {
            let count2 = 0;
            for (let i = 0; i < input.length; i++) {
                const char = input[i];
                if (
                    (char >= 'a' && char <= 'z') ||
                    (char >= 'A' && char <= 'Z')
                ) {
                    count2++;
                }
            }
            console.log(count2 + " ky tu chu cai");
        }
    } else if (typeof input === "number") {
        if (input < 2) {
            console.log("Khong phai so nguyen to");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("La so nguyen to");
        } else {
            console.log("Khong phai so nguyen to");
        }
    } else if (typeof input === "boolean") {
        if (input) {
            console.log("xu ly");
        } else {
            console.log("ko xu ly");
        }
    }
}
xuLyDuLieu("123");
xuLyDuLieu("abc123!");