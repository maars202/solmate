import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import QRCodeStyling from '@solana/qr-code-styling';

const WalletQrGenerator = (walletId) => {
  return (
    <div>WalletQrGenerator</div>
  )
}

WalletQrGenerator.propTypes = {
  walletId: PropTypes.string
}

export default WalletQrGenerator


// --- Template code ---
// import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";
// import QRCodeStyling from "qr-code-styling";

// const qrCode = new QRCodeStyling({
//   width: 300,
//   height: 300,
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
//   dotsOptions: {
//     color: "#4267b2",
//     type: "rounded"
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     margin: 20
//   }
// });

// export default function App() {
//   const [url, setUrl] = useState("https://qr-code-styling.com");
//   const [fileExt, setFileExt] = useState("png");
//   const ref = useRef(null);

//   useEffect(() => {
//     qrCode.append(ref.current);
//   }, []);

//   useEffect(() => {
//     qrCode.update({
//       data: url
//     });
//   }, [url]);

//   const onUrlChange = (event) => {
//     event.preventDefault();
//     setUrl(event.target.value);
//   };

//   const onExtensionChange = (event) => {
//     setFileExt(event.target.value);
//   };

//   const onDownloadClick = () => {
//     qrCode.download({
//       extension: fileExt
//     });
//   };

//   return (
//     <div className="App">
//       <div style={styles.inputWrapper}>
//         <input value={url} onChange={onUrlChange} style={styles.inputBox} />
//         <select onChange={onExtensionChange} value={fileExt}>
//           <option value="png">PNG</option>
//           <option value="jpeg">JPEG</option>
//           <option value="webp">WEBP</option>
//         </select>
//         <button onClick={onDownloadClick}>Download</button>
//       </div>
//       <div ref={ref} />
//     </div>
//   );
// }

// const styles = {
//   inputWrapper: {
//     margin: "20px 0",
//     display: "flex",
//     justifyContent: "space-between",
//     width: "100%"
//   },
//   inputBox: {
//     flexGrow: 1,
//     marginRight: 20
//   }
// };
