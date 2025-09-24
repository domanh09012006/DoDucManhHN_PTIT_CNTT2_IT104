import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setEnglish, setVietnamese } from "./languageSlice";

export default function LanguageSelector() {
  const language = useSelector((state: RootState) => state.language.current);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h3>Chọn ngôn ngữ</h3>
      <div
        style={{
          border: "1px solid #ccc",
          display: "inline-block",
          padding: 5,
        }}
      >
        <div
          style={{
            padding: 8,
            background: language === "vi" ? "#e0e0e0" : "white",
            cursor: "pointer",
          }}
          onClick={() => dispatch(setVietnamese())}
        >
          Vietnamese {language === "vi" && "✓"}
        </div>
        <div
          style={{
            padding: 8,
            background: language === "en" ? "#e0e0e0" : "white",
            cursor: "pointer",
          }}
          onClick={() => dispatch(setEnglish())}
        >
          English {language === "en" && "✓"}
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        {language === "vi" ? (
          <h2>Học viện Rikkei</h2>
        ) : (
          <h2>Rikkei Academy</h2>
        )}
      </div>
    </div>
  );
}
