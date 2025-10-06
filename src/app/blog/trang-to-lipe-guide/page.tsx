import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { Car, Ship, MapPin, Phone } from 'lucide-react';

export default function TrangToLipeGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-sky-700 text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">คู่มือเที่ยวตรัง</h1>
          <Link href="/" className="text-sm hover:underline">
            กลับสู่หน้าแรก
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-sky-800">
            คู่มือฉบับสมบูรณ์: เดินทางจากตรังไปเกาะหลีเป๊ะด้วยรถตู้เช่า
          </h1>
          
          <p className="lead">
            วางแผนเที่ยวเกาะหลีเป๊ะ แต่เริ่มต้นจากจังหวัดตรัง? การเดินทางอาจดูซับซ้อน แต่ด้วยบริการ <strong>รถตู้เช่าตรังพร้อมคนขับ</strong> ทุกอย่างจะกลายเป็นเรื่องง่ายและสะดวกสบายที่สุด บทความนี้จะแนะนำทุกขั้นตอนอย่างละเอียด ตั้งแต่การเดินทางจากตรังไปยังท่าเรือปากบารา จนถึงการข้ามไปสู่เกาะสวรรค์อย่างหลีเป๊ะ
          </p>

          <figure>
            <Image 
              src="/prwebcorver.jpg" 
              alt="รถตู้เช่าตรัง Vantrangforrent พร้อมให้บริการ" 
              width={800} 
              height={450}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
            <figcaption className="text-center text-sm mt-2">บริการรถตู้เช่าตรังของเรา พร้อมพาคุณไปยังทุกจุดหมาย</figcaption>
          </figure>

          <h2><MapPin className="inline-block h-6 w-6 mr-2 text-sky-600" />ทำไมต้องเลือกเดินทางด้วยรถตู้เช่า?</h2>
          <p>
            การเดินทางจากตัวเมืองตรังหรือสนามบินตรังไปยังท่าเรือปากบารา จังหวัดสตูล มีระยะทางประมาณ 140 กิโลเมตร และใช้เวลาเดินทางราว 2-2.5 ชั่วโมง การเลือก <strong>เหมารถตู้ตรัง</strong> แบบส่วนตัวมีข้อดีหลายประการ:
          </p>
          <ul>
            <li><strong>ความสะดวกสบายและเป็นส่วนตัว:</strong> ไม่ต้องวุ่นวายกับการต่อรถหรือรอรถโดยสารสาธารณะ มีพื้นที่เก็บสัมภาระเต็มที่ แวะพักหรือทานอาหารระหว่างทางได้ตามต้องการ</li>
            <li><strong>ความตรงต่อเวลา:</strong> คนขับรถมืออาชีพของเราจะคำนวณเวลาและวางแผนการเดินทางให้คุณไปถึงท่าเรือทันรอบเรือแน่นอน หมดกังวลเรื่องตกรอบเรือ</li>
            <li><strong>ความปลอดภัย:</strong> รถตู้ของเราใหม่ สะอาด และคนขับมีความชำนาญเส้นทางเป็นอย่างดี ทำให้คุณเดินทางได้อย่างสบายใจ</li>
            <li><strong>เหมาะสำหรับหมู่คณะ:</strong> หากเดินทางเป็นกลุ่ม การเช่ารถตู้จะคุ้มค่าและสะดวกกว่าการเดินทางด้วยวิธีอื่นอย่างเห็นได้ชัด</li>
          </ul>

          <h2><Ship className="inline-block h-6 w-6 mr-2 text-sky-600" />ขั้นตอนการเดินทาง: ตรัง สู่ ท่าเรือปากบารา</h2>
          <p>
            บริการ <strong>รับส่งท่าเรือปากบารา</strong> ของเราออกแบบมาให้ง่ายที่สุดสำหรับคุณ:
          </p>
          <ol>
            <li><strong>นัดรับ:</strong> เราสามารถไปรับคุณได้จากทุกที่ในจังหวัดตรัง ไม่ว่าจะเป็นสนามบินตรัง, สถานีรถไฟ, โรงแรม หรือบ้านพักส่วนตัว</li>
            <li><strong>เดินทางสู่สตูล:</strong> เพลิดเพลินกับการเดินทางบนรถตู้ VIP แอร์เย็นสบาย คนขับของเราจะใช้เส้นทางที่รวดเร็วและปลอดภัยที่สุด</li>
            <li><strong>ถึงท่าเรือปากบารา:</strong> เราจะส่งคุณถึงที่หน้าท่าเรือ พร้อมช่วยเหลือเรื่องสัมภาระ เพื่อให้คุณไปซื้อตั๋วเรือและเตรียมตัวข้ามไปยังเกาะหลีเป๊ะได้อย่างสะดวก</li>
          </ol>

          <h2><Car className="inline-block h-6 w-6 mr-2 text-sky-600" />ราคาและบริการของเรา</h2>
          <p>
            เรามีบริการ <strong>รถตู้เช่าตรังราคาถูก</strong> และโปร่งใส คุณสามารถเลือกได้ทั้งแบบเช่าเหมาทั้งวัน หรือบริการรับ-ส่งเฉพาะขาไปหรือขากลับจากท่าเรือปากบารา กรุณาติดต่อเราเพื่อสอบถามราคาพิเศษสำหรับเส้นทางนี้โดยเฉพาะ
          </p>
          
          <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg my-8">
            <h3 className="mt-0">ติดต่อจองรถตู้เช่าตรังได้เลย!</h3>
            <p>
              ไม่ว่าคุณจะต้องการ <strong>รถตู้นำเที่ยวตรัง</strong> หรือบริการรับส่งไปยังสนามบินและท่าเรือต่างๆ เราพร้อมให้บริการด้วยความเต็มใจ
            </p>
            <a href="tel:0991932345" className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors font-bold no-underline">
              <Phone className="h-5 w-5 mr-2" />
              โทรเลย 099-193-2345
            </a>
          </div>

          <p>
            การเลือกใช้บริการ <strong>รถตู้เช่าตรัง</strong> ของเรา คือการรับประกันว่าทริปเกาะหลีเป๊ะของคุณจะเริ่มต้นและจบลงด้วยความสะดวกสบาย ปลอดภัย และน่าประทับใจที่สุด ให้เราเป็นส่วนหนึ่งในการเดินทางที่แสนพิเศษของคุณ
          </p>
        </article>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} รถตู้เช่าตรัง by Vantrangforrent.com</p>
          <Link href="/" className="hover:underline">
            กลับสู่หน้าแรก
          </Link>
        </div>
      </footer>
    </div>
  );
}
