import PropTypes from "prop-types";

function StepSelector({ step, onSelectStep }) {
  const options = [1, 5, 10];

  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-xs text-gray-500 font-medium">Step:</span>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelectStep(opt)}
            className={`px-3 py-1 text-xs font-medium border ${
              step === opt
                ? "bg-indigo-600 text-white border-indigo-600 z-10"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            } rounded-md mx-0.5 cursor-pointer`}
          >
            ±{opt}
          </button>
        ))}
      </div>
    </div>
  );
}

StepSelector.propTypes = {
  step: PropTypes.number.isRequired,
  onSelectStep: PropTypes.func.isRequired,
};

export default StepSelector;
