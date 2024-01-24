import React, { useState } from "react";

const Window = () => {
  const [dizi, setDizi] = useState([
    { ad: 'Mami', id: 0 },
    { ad: 'Musti', id: 0 },
    { ad: 'Kado', id: 0 },
    { ad: 'Ali', id: 0 },
  ]);

  const [secilenKisi, setSecilenKisi] = useState('');

  const secimiDegistir = (event, setSecilenKisi) => {
    setSecilenKisi(event.target.value);
  };

  const findEnYuksekIdKisiAdi = () => {
    const enYuksekIdKişi = dizi.reduce((prev, current) => (prev.id > current.id ? prev : current));
    return enYuksekIdKişi.ad;
  };

  const butonaTikla = (setSecilenKisi) => {
    const yeniDizi = dizi.map((kisi) => {
      if (kisi.ad === setSecilenKisi) {
        return { ...kisi, id: kisi.id + 1 };
      }
      return kisi;
    });

    const enYuksekIdKisiAdi = findEnYuksekIdKisiAdi();
    console.log(`${setSecilenKisi}'nin yeni id değeri: ${yeniDizi.find(kisi => kisi.ad === setSecilenKisi).id}`);
    console.log(`En yüksek id'ye sahip kişi: ${enYuksekIdKisiAdi}`);
    setDizi(yeniDizi);
  };

  return (
    <div className='window'>
      <div className='kutu-one'>
        <h3 className='text-end'>Sence grubun en yakışıklısı kimdir?</h3>
        <br />
        <select className='options' onChange={(e) => secimiDegistir(e, setSecilenKisi)}>
          <option>Mami</option>
          <option>Musti</option>
          <option>Kado</option>
          <option>Ali</option>
        </select>
         <br />
         <button className='button' onClick={() => butonaTikla(secilenKisi)}>Seç</button>
      </div>

      <div className='kutu-to'>
        <h4 className="kimdir"> Mühendis Olacak Adamlar Kimdir ?</h4>
        <p className="text-h">
        Karamanoğlu Mehmetbey Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisi olan Mühendis Olacak Adamlar, yedi kişilik bir aile olarak, okulun renkli ve enerjik yüzlerini temsil ediyor.
        Bu ekip, derslerden kaytaran birkaç üyesiyle birlikte, genelde eğlenceli anlayışları ve biraz uçuk, kaçık tavırlarıyla tanınıyor.
        Grubun içindeki bireyler, sıkıcı derslere karşı biraz tembel davranabilirler, ancak bir araya geldiklerinde ortaya çıkan enerji ve pozitiflik, bu durumu telafi ediyor.
        Her bir üye, öğrencilik hayatını sadece derslerle sınırlamayıp, aynı zamanda sosyal hayatlarını da renklendirmeye kararlı.
        Kızları, güzellikleri ve zarafetleriyle adeta çiçek gibiler. Okulun baharına benzer şekilde, her ortamı renklendiren ve gülümseten birer çiçek gibi davranıyorlar.
        Erkek üyeler ise aslanlar gibi cesur, kararlı ve liderlik vasıflarıyla dikkat çekiyor. Grup, her bir bireyin farklı özelliklerini birleştirerek, birbirlerini tamamlayan bir uyum içinde ilerliyor.
        Bu enerjik grup, derslerde başarılı olmanın yanı sıra, birbirleriyle geçirdikleri zamanları da en iyi şekilde değerlendiriyorlar.
        Her anı özel kılmayı seven Mühendis Olacak Adamlar, öğrencilik hayatının zorluklarına karşı birlikte güçleniyor ve her zorluğu birlikte aşıyorlar.
        Bilgisayar mühendisliği alanında geleceğin profesyonellerini yetiştiren bu ekip, sadece akademik başarılarıyla değil, aynı zamanda sosyal uyumları ve eğlenceli tavırlarıyla da okulun en iyi gruplarından biri olarak tanınıyor.
        Her bir üye, kendine özgü kişiliğiyle bu renkli tabloya katkı sağlıyor ve Mühendis Olacak Adamlar, Karamanoğlu Mehmetbey Üniversitesi'nde unutulmaz bir iz bırakıyor.
        </p>

      </div>

      
    </div>
  );
};

export default Window;

