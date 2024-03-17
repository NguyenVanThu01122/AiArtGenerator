import { Button } from "antd";
import { ResultsItem } from "./styles";
export function ResultItem() {
  return (
    <ResultsItem>
      {/* <div className="back-item" onClick={handleBack}>
        <img
          src="https://creatorhub.ai/static/media/arrow-left.399a6a0f4dc1267cf682ef36c05ed4b9.svg"
          alt=""
        />
        <div>Back to Generate</div>
      </div>
      <div className="box-result">
        <div className="display-image">
          <img className="image-result" src={resultImage} alt="" />
        </div>
        <div className="section-parameter">
          <div>AI Art Result</div>
          <div className="information-result">
            <div className="detail-result">
              <div className="text-group">
                <div>Style</div>
                <div>{selectStyle ? selectStyle.name : "-"}</div>
              </div>
              <div className="text-group">
                <div>Step</div>
                <div>{sliderValueSteps}</div>
              </div>
            </div>
            <div className="detail-result">
              <div className="text-group">
                <div>Created</div>
                <div>{new Date().toDateString()}</div>
              </div>
              <div className="text-group">
                <div>Guidance Scale</div>
                <div>{sliderValueScale}</div>
              </div>
            </div>
            <div className="detail-result">
              <div className="text-group">
                <div>Alpha</div>
                <div>{sliderValueAlpha}</div>
              </div>
            </div>
          </div>
          <div className="item-prompt">
            <div className="text-prompt">
              <div>Prompt</div>
              <div ref={textToCopyRef}>
                {prompt.trim() ? prompt.trim() : "-"}
              </div>
            </div>
            <div className="text-prompt">
              <div>Negative Prompt</div>
              <div>{negativePrompt.trim() ? negativePrompt.trim() : "-"}</div>
            </div>
          </div>
          <div className="button-group">
            <Button className="copy-button" onClick={handleCopyText}>
              <img
                src="https://creatorhub.ai/static/media/ic-remix.fc1b33535a75591dc551cfd88ba2f755.svg"
                alt=""
              />
              Copy Prompt
            </Button>
            <Button className="download-button">Download - 1 Credit</Button>
          </div>
        </div>
      </div> */}
    </ResultsItem>
  );
}

