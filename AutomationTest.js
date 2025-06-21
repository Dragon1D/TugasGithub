
const assert = require("assert");

// Definisikan variabel yang dipakai untuk API
const BASE_URL = 'https://reqres.in/api';
const AUTH_TOKEN = "reqres-free-v1";

//Grouping test dengan jelaskan konteksnya yang sedang dilakukan
describe("Tugas API Automation: reqres.in", () => {

    // GET data user
    it("(GET) data user", async function () {
        
        const response = await fetch(`${BASE_URL}/users/2`);
        const data = await response.json(); 
        
        console.log('GET Response:', data);

        // Pengecekan (Assertion)
        assert.strictEqual(response.status, 200, "Gagal: Status code GET harus 200"); // Memastikan status code adalah 20
        assert.strictEqual(data.data.id, 2, "Gagal: ID user harus 2"); // Memastikan ID user yang didapat adalah 2
    });

    // POST data user
    it("(POST) Created data user baru", async function () {
        const payload = { name: "Deny Setyawan", job: "Karyawan Swasta" };

        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Poin Kunci: Header otentikasi yang benar sesuai dokumentasi reqres.in
                'x-api-key': AUTH_TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log('POST Response:', data);
        
        assert.strictEqual(response.status, 201, "Gagal: Status code POST harus 201"); // Memastikan status code adalah 201
        assert.strictEqual(data.name, payload.name, "Gagal: Nama user yang dibuat tidak sesuai"); // Memastikan nama user yang dibuat sesuai dengan payload
    });

    // PATCH data user
    it("(PATCH) data user (update sebagian data)", async function () {
        const payload = { job: "Karyawan Swasta" };
        
        const response = await fetch(`${BASE_URL}/users/2`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': AUTH_TOKEN // Header yang sama untuk otentikasi
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log('PATCH Response:', data);

        assert.strictEqual(response.status, 200, "Gagal: Status code PATCH harus 200"); // Memastikan status code adalah 200
        assert.strictEqual(data.job, payload.job, "Gagal: Pekerjaan user tidak ter-update"); // Memastikan pekerjaan user yang diupdate sesuai dengan payload
    });

    // DELETE data user
    it("(DELETE) data user ", async function () {

        const response = await fetch(`${BASE_URL}/users/2`, {
            method: 'DELETE',
            headers: {
                'x-api-key': AUTH_TOKEN // Header yang sama untuk otentikasi
            }
        });
        
        console.log('DELETE Response Status:', response.status);

        assert.strictEqual(response.status, 204, "Gagal: Status code DELETE harus 204"); // Memastikan status code adalah 204 (No Content)
    });
});