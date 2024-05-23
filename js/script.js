let isKelilingVisible = false;

function hideOrShow() {
    if (!isKelilingVisible) {
        isKelilingVisible = true;
        document.getElementById('luas-section').style.display = 'none';
        document.getElementById('keliling-section').style.display = 'block';
    } else {
        isKelilingVisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const luasForm = document.getElementById('luasForm');
    const kelilingForm = document.getElementById('kelilingForm');
    const luasProcess = document.getElementById('luasProcess');
    const kelilingProcess = document.getElementById('kelilingProcess');
    const hitungLuasButton = document.getElementById('hitung-luas-button');
    const hitungKelilingButton = document.getElementById('hitung-keliling-button');

    hitungLuasButton.addEventListener('click', function() {
        const alas = parseFloat(luasForm.querySelector('input[name="alas"]').value);
        const tinggi = parseFloat(luasForm.querySelector('input[name="tinggi"]').value);

        if (isNaN(alas) || isNaN(tinggi)) {
            alert('Validation failed. Please check your submission and try again.');
            return;
        }

        const luas = 0.5 * alas * tinggi;
        luasProcess.innerHTML = `
            L = 1/2 x a x t<br>
            L = 1/2 x ${alas} x ${tinggi}<br>
            L = ${luas}
        `;
    });

    hitungKelilingButton.addEventListener('click', function() {
        const s1 = parseFloat(kelilingForm.querySelector('input[name="s1"]').value);
        const s2 = parseFloat(kelilingForm.querySelector('input[name="s2"]').value);
        const s3 = parseFloat(kelilingForm.querySelector('input[name="s3"]').value);

        if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
            alert('Validation failed. Please check your submission and try again.');
            return;
        }

        const keliling = s1 + s2 + s3;
        kelilingProcess.innerHTML = `
            K = S1 + S2 + S3<br>
            K = ${s1} + ${s2} + ${s3}<br>
            K = ${keliling}
        `;
    });
});