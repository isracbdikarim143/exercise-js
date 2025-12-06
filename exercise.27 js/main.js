function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                resolve({ id: 22165, name: "Isra Abdikariim" });
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

fetchUserData()
    .then((data) => console.log("User Data:", data))
    .catch((error) => console.log("Error:", error));