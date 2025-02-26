export const getTrainingMenu1 = (gender, gymType, frequency, volume) => {
  let suggestedMenu = [];

  const createMenu = (title, menuItems) => {
    suggestedMenu.push(<div className='training-menu-title'>{title}</div>);
    suggestedMenu.push(
      <ul className='training-menu-list'>
        {menuItems.map((item, index) => (
          <li key={index}><span className='training-menu-day'>{item.day}:</span> {item.exercises.map((exercise, i) => <div key={i}>{exercise}</div>)}</li>
        ))}
      </ul>
    );
  };

  // **条件ごとに適切なメニューを決定**
  if (gender === "男性") {
    if (gymType === "ジムに通っている") {
      if (frequency === "6回/週") {
        if (volume === "多いのがいい！") {
          createMenu("6回/週のハードメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×5セット", "インクラインダンベルフライ 10回×5セット", "ペックフライ 10回×5セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×5セット", "ダンベルローイング 10回×5セット", "ラットプルダウン 10回×5セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×5セット", "レッグプレス 10回×5セット", "レッグカール 10回×5セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×5セット", "ダンベルショルダープレス 10回×5セット", "サイドレイズ 15回×5セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×5セット", "インクラインダンベルカール 10回×5セット", "ケーブルプルオーバー 15回×5セット"] },
            { day: "土曜日", exercises: ["クランチ 20回×5セット", "レッグレイズ 20回×5セット"] },
            { day: "日曜日", exercises: ["休み"] }
          ]);
        } else if (volume === "普通がいいかな〜") {
          createMenu("6回/週の標準メニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×3セット", "インクラインダンベルフライ 10回×3セット", "ペックフライ 10回×3セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×3セット", "ダンベルローイング 10回×3セット", "ラットプルダウン 10回×3セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×3セット", "レッグプレス 10回×3セット", "レッグカール 10回×3セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×3セット", "ダンベルショルダープレス 10回×3セット", "サイドレイズ 15回×3セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×3セット", "インクラインダンベルカール 10回×3セット", "ケーブルプルオーバー 15回×3セット"] },
            { day: "土曜日", exercises: ["クランチ 20回×3セット", "レッグレイズ 20回×3セット"] },
            { day: "日曜日", exercises: ["休み"] }
          ]);
        } else {
          createMenu("6回/週の軽めメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×2セット", "インクラインダンベルフライ 10回×2セット", "ペックフライ 10回×2セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×2セット", "ダンベルローイング 10回×2セット", "ラットプルダウン 10回×2セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×2セット", "レッグプレス 10回×2セット", "レッグカール 10回×2セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×2セット", "ダンベルショルダープレス 10回×2セット", "サイドレイズ 15回×2セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×2セット", "インクラインダンベルカール 10回×2セット", "ケーブルプルオーバー 15回×2セット"] },
            { day: "土曜日", exercises: ["クランチ 20回×2セット", "レッグレイズ 20回×2セット"] },
            { day: "日曜日", exercises: ["休み"] }
          ]);
        }
      } else if (frequency === "5回/週") {
        if (volume === "多いのがいい！") {
          createMenu("5回/週のハードメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×5セット", "インクラインダンベルフライ 10回×5セット", "ペックフライ 10回×5セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×5セット", "ダンベルローイング 10回×5セット", "ラットプルダウン 10回×5セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×5セット", "レッグプレス 10回×5セット", "レッグカール 10回×5セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×5セット", "ダンベルショルダープレス 10回×5セット", "サイドレイズ 15回×5セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×5セット", "インクラインダンベルカール 10回×5セット", "ケーブルプルオーバー 15回×5セット"] },
            { day: "土日曜日", exercises: ["休み"] }
          ]);
        } else if (volume === "普通がいいかな〜") {
          createMenu("5回/週の標準メニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×3セット", "インクラインダンベルフライ 10回×3セット", "ペックフライ 10回×3セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×3セット", "ダンベルローイング 10回×3セット", "ラットプルダウン 10回×3セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×3セット", "レッグプレス 10回×3セット", "レッグカール 10回×3セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×3セット", "ダンベルショルダープレス 10回×3セット", "サイドレイズ 15回×3セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×3セット", "インクラインダンベルカール 10回×3セット", "ケーブルプルオーバー 15回×3セット"] },
            { day: "土日曜日", exercises: ["休み"] }
          ]);
        } else {
          createMenu("5回/週の軽めメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×2セット", "インクラインダンベルフライ 10回×2セット", "ペックフライ 10回×2セット"] },
            { day: "火曜日", exercises: ["デッドリフト 10回×2セット", "ダンベルローイング 10回×2セット", "ラットプルダウン 10回×2セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×2セット", "レッグプレス 10回×2セット", "レッグカール 10回×2セット"] },
            { day: "木曜日", exercises: ["ミリタリープレス 10回×2セット", "ダンベルショルダープレス 10回×2セット", "サイドレイズ 15回×2セット"] },
            { day: "金曜日", exercises: ["バーベルカール 10回×2セット", "インクラインダンベルカール 10回×2セット", "ケーブルプルオーバー 15回×2セット"] },
            { day: "土日曜日", exercises: ["休み"] }
          ]);
        }
      } else if (frequency === "4回/週") {
        if (volume === "多いのがいい！") {
          createMenu("4回/週のハードメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×5セット", "インクラインダンベルフライ 10回×5セット", "ペックフライ 10回×5セット"] },
            { day: "火曜日", exercises: ["バーベルスクワット 10回×5セット", "レッグプレス 10回×5セット", "レッグカール 10回×5セット"] },
            { day: "木曜日", exercises: ["デッドリフト 10回×5セット", "ダンベルローイング 10回×5セット", "ラットプルダウン 10回×5セット"] },
            { day: "金曜日", exercises: ["ミリタリープレス 10回×5セット", "ダンベルショルダープレス 10回×5セット", "サイドレイズ 15回×5セット"] },
            { day: "水土日曜日", exercises: ["休み"] }
          ]);
        } else if (volume === "普通がいいかな〜") {
          createMenu("4回/週の標準メニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×3セット", "インクラインダンベルフライ 10回×3セット", "ペックフライ 10回×3セット"] },
            { day: "火曜日", exercises: ["バーベルスクワット 10回×3セット", "レッグプレス 10回×3セット", "レッグカール 10回×3セット"] },
            { day: "木曜日", exercises: ["デッドリフト 10回×3セット", "ダンベルローイング 10回×3セット", "ラットプルダウン 10回×3セット"] },
            { day: "金曜日", exercises: ["ミリタリープレス 10回×3セット", "ダンベルショルダープレス 10回×3セット", "サイドレイズ 15回×3セット"] },
            { day: "水土日曜日", exercises: ["休み"] }
          ]);
        } else {
          createMenu("4回/週の軽めメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×2セット", "インクラインダンベルフライ 10回×2セット", "ペックフライ 10回×2セット"] },
            { day: "火曜日", exercises: ["バーベルスクワット 10回×2セット", "レッグプレス 10回×2セット", "レッグカール 10回×2セット"] },
            { day: "木曜日", exercises: ["デッドリフト 10回×2セット", "ダンベルローイング 10回×2セット", "ラットプルダウン 10回×2セット"] },
            { day: "金曜日", exercises: ["ミリタリープレス 10回×2セット", "ダンベルショルダープレス 10回×2セット", "サイドレイズ 15回×2セット"] },
            { day: "水土日曜日", exercises: ["休み"] }
          ]);
        }
      } else if (frequency === "3回/週") {
        if (volume === "多いのがいい！") {
          createMenu("3回/週のハードメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×5セット", "インクラインダンベルフライ 10回×5セット", "ペックフライ 10回×5セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×5セット", "レッグプレス 10回×5セット", "レッグカール 10回×5セット"] },
            { day: "金曜日", exercises: ["デッドリフト 10回×5セット", "ダンベルローイング 10回×5セット", "ラットプルダウン 10回×5セット"] },
            { day: "火木土日曜日", exercises: ["休み"] }
          ]);
        } else if (volume === "普通がいいかな〜") {
          createMenu("3回/週の標準メニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×3セット", "インクラインダンベルフライ 10回×3セット", "ペックフライ 10回×3セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×3セット", "レッグプレス 10回×3セット", "レッグカール 10回×3セット"] },
            { day: "金曜日", exercises: ["デッドリフト 10回×3セット", "ダンベルローイング 10回×3セット", "ラットプルダウン 10回×3セット"] },
            { day: "火木土日曜日", exercises: ["休み"] }
          ]);
        } else {
          createMenu("3回/週の軽めメニュー", [
            { day: "月曜日", exercises: ["ベンチプレス 10回×2セット", "インクラインダンベルフライ 10回×2セット", "ペックフライ 10回×2セット"] },
            { day: "水曜日", exercises: ["バーベルスクワット 10回×2セット", "レッグプレス 10回×2セット", "レッグカール 10回×2セット"] },
            { day: "金曜日", exercises: ["デッドリフト 10回×2セット", "ダンベルローイング 10回×2セット", "ラットプルダウン 10回×2セット"] },
            { day: "火木土日曜日", exercises: ["休み"] }
          ]);
        }
      }
    }
  } else {
    suggestedMenu = [];
  }

  return suggestedMenu;
};