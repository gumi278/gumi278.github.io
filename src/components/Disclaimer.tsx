type DisclaimerProps = {
  url?: string;
};

export default function Disclaimer({ url }: DisclaimerProps) {
return (
	<div className="disclaimer">
		<p>
本記事で使用しているスクリーンショットは、OpenAI の対話型 AI との実際の会話画面を記録したものです。
掲載内容は AI が生成した回答を含み、正確性・完全性を保証するものではありません。
		</p>
		{url && (
			<p>
必要であれば <a href={url} target="_blank" rel="noopener noreferrer">共有化された原本</a> を参照することができます。
			</p>
		)}
	</div>
);
}
